using System.ComponentModel.DataAnnotations;

namespace CondParcel.Models
{
  public class EncomendaRequest
  {
    [Required(ErrorMessage = "O campo Bloco é obrigatório.")]
    public string Bloco { get; set; }

    [Required(ErrorMessage = "O campo Apartamento é obrigatório.")]
    public string Apartamento { get; set; }

    [Required(ErrorMessage = "O campo Descrição é obrigatório.")]
    public string Descricao { get; set; }

    [Required(ErrorMessage = "O campo Whatsapp é obrigatório.")]
    public string Whatsapp { get; set; }
  }
}
