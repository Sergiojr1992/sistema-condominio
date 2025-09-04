using CondParcel.Models;
using Microsoft.AspNetCore.Mvc;

namespace CondParcel.Controllers
{
  [Route("api/usuario")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {
    private static List<MoradorRequest> moradores = new();
    private static List<EncomendaRequest> encomendas = new();

    private IConfiguration _configuration;
    public UsuarioController(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    // ------------------- LOGIN -------------------
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

    // ------------------- MORADOR -------------------
    [Route("morador")]
    [HttpPost]
    public IActionResult Morador([FromBody] MoradorRequest request)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Todos campos são obrigatórios."
        });
      }

      moradores.Add(request);

      return Ok(new
      {
        sucesso = true,
        mensagem = "Morador cadastrado com sucesso."
      });
    }

    // Buscar morador por bloco e apartamento
    [Route("morador")]
    [HttpGet]
    public IActionResult BuscarMorador([FromQuery] string bloco, [FromQuery] string apartamento)
    {
      var morador = moradores.FirstOrDefault(m =>
          m.Bloco.Equals(bloco, StringComparison.OrdinalIgnoreCase) &&
          m.Apartamento.Equals(apartamento, StringComparison.OrdinalIgnoreCase));

      if (morador == null)
      {
        return NotFound(new
        {
          sucesso = false,
          mensagem = "Morador não encontrado."
        });
      }

      return Ok(morador);
    }

    // ------------------- ENCOMENDA -------------------
    [Route("encomenda")]
    [HttpPost]
    public IActionResult Encomenda([FromBody] EncomendaRequest request)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new
        {
          sucesso = false,
          mensagem = "Preencha todos os campos corretamente!"
        });
      }

      // Gerar ID e status
      request.Id = Guid.NewGuid().ToString();
      request.Status = "Pendente";
      request.DataCadastro = DateTime.Now;

      encomendas.Add(request);

      return Ok(new
      {
        sucesso = true,
        mensagem = "Encomenda cadastrada com sucesso."
      });
    }

    // Listar todas as encomendas
    [Route("encomenda")]
    [HttpGet]
    public IActionResult ListarEncomendas()
    {
      return Ok(encomendas);
    }

    // Marcar encomenda como retirada
    [Route("encomenda/{id}/retirar")]
    [HttpPut]
    public IActionResult RetirarEncomenda(string id)
    {
      var encomenda = encomendas.FirstOrDefault(e => e.Id == id);

      if (encomenda == null)
      {
        return NotFound(new
        {
          sucesso = false,
          mensagem = "Encomenda não encontrada."
        });
      }

      encomenda.Status = "Retirado";
      encomenda.DataRetirada = DateTime.Now;

      return Ok(new
      {
        sucesso = true,
        mensagem = "Encomenda marcada como retirada."
      });
    }
  }
}
