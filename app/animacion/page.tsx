'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const canvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colores = [
    '#f00',
    '#00f',
    '#0f0',
    '#ff0',
    '#0ff',
    '#f0f',
    '#f00ff',
    '#000',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) throw new Error('Canvas no encontrado');
    const ctx = canvas.getContext('2d');

    const radius = 10;

    let x = canvas.width / 3;
    let y = canvas.height / 3;

    let dx = 0.8;
    let dy = 0.8;

    let color = Math.floor(Math.random() * colores.length);

    const drawBall = () => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = colores[color];
      ctx.fill();
    };

    const updateBall = () => {
      x += dx;
      y += dy;

      if (y + radius > canvas.height || y - radius < 0) {
        dy *= -1;
        color = Math.floor(Math.random() * colores.length);
      }

      if (x + radius > canvas.width || x - radius < 0) {
        dx *= -1;
        color = Math.floor(Math.random() * colores.length);
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      updateBall();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <main className='w-screen h-screen'>
      <Link
        href='/'
        className='hidden md:block fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'
      >
        <FaArrowLeft size={24} />
      </Link>
      <canvas
        ref={canvasRef}
        className='w-screen h-screen'
      ></canvas>
    </main>
  );
};

export default canvasAnimation;
