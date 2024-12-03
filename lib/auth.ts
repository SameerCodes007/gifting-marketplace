import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { type User } from '@/types';

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient({ cookies })
);

export async function getUser(): Promise<User | null> {
  const supabase = createServerSupabaseClient();
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    return profile;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}