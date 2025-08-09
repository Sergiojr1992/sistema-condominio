using CondParcel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace CondParcel.Controllers
{
  [Route("api/usuario")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {
    [Route("login")]
    [HttpPost]
      public IActionResult Login([FromBody] LoginRequest request)
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(new
          {
            sucesso = false,
            mensagem = "Preencha todos os campos corretamente."
          });
        }

        if (request.usuario == "admin" && request.senha == "1234")
        {
          return Ok(new
          {
            sucesso = true,
            mensagem = "Login realizado com sucesso!"
          });
        }

        return Unauthorized(new
        {
          sucesso = false,
          mensagem = "Usuário ou senha inválidos"
        });
      }

    [Route("morador")]
    [HttpPost]
    public IActionResult Morador(MoradorRequest request)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Preencha todos os campos corretamente !"
        });
      }

      if (!ModelState.IsValid ||
               string.IsNullOrWhiteSpace(request.Morador) ||
               string.IsNullOrWhiteSpace(request.Bloco) ||
               string.IsNullOrWhiteSpace(request.Apartamento) ||
               string.IsNullOrWhiteSpace(request.Whatsapp))      
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Todos campos são obrigatórios."
        }); 
      }

      return Ok(new
      {
        sucesso = true,
        mensagem = "Morador cadastrado com suceesso,"
      });
    }

    [Route("encomenda")]
    [HttpPost]
    public IActionResult Encomenda(EncomendaRequest request)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Preencha todos os campos corretamente!"
        });
      }

      if (!ModelState.IsValid ||
               string.IsNullOrWhiteSpace((string?)request.Bloco) ||
               string.IsNullOrWhiteSpace((string?)request.Apartamento) ||
               string.IsNullOrWhiteSpace((string?)request.Descricao) ||
               string.IsNullOrWhiteSpace(request.Whatsapp))
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Todos campos são obrigatórios."
        });
      }

      return Ok(new
      {
        sucesso = true,
        mensagem = "Encomenda cadastrada com sucesso."
      });
    }
  }
}
