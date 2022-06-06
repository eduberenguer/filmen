import React from 'react';

export function Footer() {
    return (
        <div className="bg-black text-stone-500 flex p-4 items-center text-xs justify-around">
            <div className="flex flex-col">
                <p>¿Preguntas?</p>
                <p>Preguntas frecuentes</p>
                <p>Centro de ayuda</p>
            </div>
            <div>
                <p>Privacidad</p>
                <p>Información corporativa</p>
                <p>Términos de uso</p>
            </div>
        </div>
    );
}
