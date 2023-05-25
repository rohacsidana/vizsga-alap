using Microsoft.AspNetCore.Mvc;

namespace vizsga_alap_backend.Controllers
{
    /*
     [Route("api/ingatlan")]
    [ApiController]
   
    public class IngatlanController : ControllerBase
    {
        IngatlanContext _context;

        public IngatlanController(IngatlanContext context)
        {
            _context = context;
        }

        [EnableCors]
        [HttpGet]

        public async Task<ActionResult<List<Ingatlanok>>> Get()
        {
            var ingatlanok = await _context.Ingatlanoks.Include(x=>x.Kat).ToListAsync();
            if (ingatlanok.IsNullOrEmpty())
                return BadRequest("Nincs ingatlan");
            return Ok(ingatlanok);
        }

        [EnableCors]
        [HttpPost]

        public async Task<ActionResult<List<Ingatlanok>>> AddIngatlan(Ingatlanok ingatlan)
        {
            await _context.Ingatlanoks.AddAsync(ingatlan);
            await _context.SaveChangesAsync();
            return Ok(await _context.Ingatlanoks.Include(x=>x.Kat).ToListAsync());
        }

        [EnableCors]
        [HttpDelete]

        public async Task<IActionResult> Delete(int id)
        {
            var ingatlan = await _context.Ingatlanoks.FindAsync(id);
            if (ingatlan == null)
                return BadRequest("Nem létezik az adott ingatlan.");
            _context.Ingatlanoks.Remove(ingatlan);
            await _context.SaveChangesAsync();
            return Ok("Sikeres törlés.");
        }
     */
}