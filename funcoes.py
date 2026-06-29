from supabase import supabase

def consultar_users():
    response = supabase.table('user').select('*').execute()
    if response.status_code == 200:
        return response.data
    else:
        return None