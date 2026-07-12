from supa_client import supabase

def pegar_placar():
    response = supabase.table('placar').select("*").execute()
    dados = response.data
    return dados[0] if dados else {}

def pegar_noticias():
    resposta_noticia = supabase.table('noticias').select("*").execute()
    return resposta_noticia.data