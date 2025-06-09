import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (you'll generate these later from Supabase CLI)
export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          website: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          company_id: string | null
          email: string
          full_name: string | null
          role: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          company_id?: string | null
          email: string
          full_name?: string | null
          role?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string | null
          email?: string
          full_name?: string | null
          role?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      vacancies: {
        Row: {
          id: string
          company_id: string
          created_by: string | null
          title: string
          description: string | null
          requirements: string | null
          location: string | null
          salary_min: number | null
          salary_max: number | null
          currency: string | null
          employment_type: string | null
          experience_level: string | null
          status: string | null
          ai_generated: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          created_by?: string | null
          title: string
          description?: string | null
          requirements?: string | null
          location?: string | null
          salary_min?: number | null
          salary_max?: number | null
          currency?: string | null
          employment_type?: string | null
          experience_level?: string | null
          status?: string | null
          ai_generated?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          created_by?: string | null
          title?: string
          description?: string | null
          requirements?: string | null
          location?: string | null
          salary_min?: number | null
          salary_max?: number | null
          currency?: string | null
          employment_type?: string | null
          experience_level?: string | null
          status?: string | null
          ai_generated?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
      candidates: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          resume_url: string | null
          linkedin_url: string | null
          portfolio_url: string | null
          location: string | null
          current_position: string | null
          experience_years: number | null
          skills: string[] | null
          ai_score: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone?: string | null
          resume_url?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          location?: string | null
          current_position?: string | null
          experience_years?: number | null
          skills?: string[] | null
          ai_score?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          resume_url?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          location?: string | null
          current_position?: string | null
          experience_years?: number | null
          skills?: string[] | null
          ai_score?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          vacancy_id: string
          candidate_id: string
          status: string | null
          applied_at: string
          last_updated: string
          recruiter_notes: string | null
          ai_match_score: number | null
        }
        Insert: {
          id?: string
          vacancy_id: string
          candidate_id: string
          status?: string | null
          applied_at?: string
          last_updated?: string
          recruiter_notes?: string | null
          ai_match_score?: number | null
        }
        Update: {
          id?: string
          vacancy_id?: string
          candidate_id?: string
          status?: string | null
          applied_at?: string
          last_updated?: string
          recruiter_notes?: string | null
          ai_match_score?: number | null
        }
      }
    }
  }
}
