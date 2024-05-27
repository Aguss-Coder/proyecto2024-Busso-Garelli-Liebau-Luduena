'use client'
import { useEffect, useRef } from 'react';

export default function page() {
  return (
    <div className="m-0 overflow-hidden w-screen h-screen">
      <canvas id="lienzo" className="bg-principal-light w-screen h-screen"></canvas>
    </div>
  );
}

const canvas = document.getElementById('lienzo') as HTMLCanvasElement;
if (canvas === null) throw new Error('Canvas no encontrado');
const ctx = canvas.getContext('2d');

const colores = ['#f00', '#00f', '#0f0', '#ff0', '#0ff', '#f0f' , '#f00ff', '#000',];

const width = canvas.width;
const height = canvas.height;

const ballRadius = 10;

let x = width / 3;
let y = height / 3;

let dx = 0.8;
let dy = 0.8;

let color = Math.floor(Math.random() * colores.length);

function drawBall() {
  if (!ctx) return;
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = colores[color];
  ctx.fill();
}

function updateBall() {
  x += dx;
  y += dy;

  if (y + ballRadius > height || y - ballRadius < 0) {
    dy *= -1;
    color = Math.floor(Math.random() * colores.length);
  }

  if (x + ballRadius > width || x - ballRadius < 0) {
    dx *= -1;
    color = Math.floor(Math.random() * colores.length);
  }
}

function animate() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  drawBall();
  updateBall();
  requestAnimationFrame(animate);
}

animate();