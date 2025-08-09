using System.ComponentModel.DataAnnotations;

namespace CondParcel.Models
{
  public class LoginRequest
  {
    [Required(ErrorMessage = "O campo 'usuario' é obrigatório.")]
    public string usuario { get; set; }

    [Required(ErrorMessage = "O campo 'senha' é obrigatório.")]
    public string senha { get; set; }
  }
}
