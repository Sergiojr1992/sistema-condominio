namespace CondParcel.Controllers
{
  public class EncomendaRequest
  {
    public object Bloco { get; internal set; }
    public object Apartamento { get; internal set; }
    public object Descricao { get; internal set; }
    public string? Whatsapp { get; internal set; }
  }
}