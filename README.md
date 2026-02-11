# NefroCare (estática)

Interfaz estática de nefrología con dos accesos:
- Paciente (DNI)
- Doctor (correo + contraseña)

## Ejecutar en local

### Opción rápida
```bash
bash start.sh
```

### Opción manual
```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Luego abre:
- `http://localhost:4173`
- o `http://127.0.0.1:4173`

> Si ves “No se puede acceder a este sitio web”, normalmente significa que el servidor no está corriendo o el puerto está ocupado.

## Solución rápida de problemas

1. Verifica que el puerto esté libre:
```bash
lsof -i :4173
```
2. Si hay un proceso viejo, ciérralo:
```bash
pkill -f "http.server 4173"
```
3. Arranca de nuevo:
```bash
python3 -m http.server 4173 --bind 0.0.0.0
```
