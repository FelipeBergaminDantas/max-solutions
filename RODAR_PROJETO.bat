@echo off
echo ========================================
echo Max Solutions - Script de Instalacao
echo ========================================
echo.
echo PROBLEMA DETECTADO: O diretorio atual contem espacos no nome
echo Isso causa problemas com o npm no Windows.
echo.
echo SOLUCAO: Mova este projeto para um diretorio SEM ESPACOS
echo.
echo Exemplos de diretorios validos:
echo   C:\projetos\max-solutions
echo   C:\Users\%USERNAME%\max-solutions
echo   D:\max-solutions
echo.
echo ========================================
echo.
pause
echo.
echo Deseja que eu tente instalar mesmo assim? (pode falhar)
pause
echo.
echo Instalando dependencias...
call npm install
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo Instalacao concluida com sucesso!
    echo ========================================
    echo.
    echo Iniciando servidor de desenvolvimento...
    echo Acesse: http://localhost:3000
    echo.
    echo Pressione Ctrl+C para parar o servidor
    echo ========================================
    call npm run dev
) else (
    echo ========================================
    echo ERRO na instalacao!
    echo ========================================
    echo.
    echo Por favor, mova o projeto para um diretorio sem espacos
    echo e execute novamente este script.
    echo.
    pause
)
