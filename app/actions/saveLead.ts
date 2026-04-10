'use server';

import { leadSchema, type LeadFormData } from '@/app/lib/schema';

export async function saveLead(data: LeadFormData) {
  const parsed = leadSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false as const, error: parsed.error.flatten().fieldErrors };
  }

  try {
    const admin = await import('firebase-admin');

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    }

    const db = admin.firestore();

    await db.collection('summit-leads').add({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      consent: parsed.data.consent,
      registeredAt: admin.firestore.FieldValue.serverTimestamp(),
      source: 'elevate-ai-summit',
    });

    return { success: true as const };
  } catch (error) {
    console.error('Error saving lead:', error);
    return { success: false as const, error: 'Failed to save registration.' };
  }
}
