-- Fix RLS Policy for user_profiles
-- Run this in Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

-- Create new policies that work with auth.uid()
CREATE POLICY "Enable insert for authenticated users" ON user_profiles
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable read access for own profile" ON user_profiles
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Enable update for own profile" ON user_profiles
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Also allow service role to do anything (for admin operations)
CREATE POLICY "Service role can do anything" ON user_profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
