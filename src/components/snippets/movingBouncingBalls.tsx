import { useEffect, useRef } from 'react';
import { useResize } from '@/hooks/useResize';

import styles from './movingBouncingBalls.module.scss';

interface IBall {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  draw: () => void;
  update: () => void;
}

class Ball implements IBall {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;

  constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  draw() {
    this.ctx.globalCompositeOperation = 'multiply'; // 色を乗算にする
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    // 壁にぶつかったときの反射
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    // イージングのようなポヨンとした動き
    this.x += this.dx * 0.98; // 速度を少し減衰
    this.y += this.dy * 0.98; // 速度を少し減衰
  }
}

const MovingBouncingBalls: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ballsRef = useRef<IBall[]>([]);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const baseWidth = canvas.width > 780 ? 1920 : 780; // スマホとPCでベースサイズ変更
      const widthFactor = canvas.width / baseWidth; // 基準となる幅

      const sizes = [200, 100, 100, 50, 25].map(size => size * widthFactor);
      const balls = ballsRef.current;
      for (let i = 0; i < balls.length; i++) {
        balls[i].radius = sizes[i % sizes.length];
      }

      // ボールの位置をリサイズに合わせて調整する
      for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        if (ball.x + ball.radius > canvas.width) {
          ball.x = canvas.width - ball.radius;
          ball.dx = -Math.abs(ball.dx);
        }
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.dx = Math.abs(ball.dx);
        }
        if (ball.y + ball.radius > canvas.height) {
          ball.y = canvas.height - ball.radius;
          ball.dy = -Math.abs(ball.dy);
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.dy = Math.abs(ball.dy);
        }
      }
    }
  };

  useResize(resizeCanvas);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    if (!canvas) return;
    
    canvas.classList.add(styles.isLoaded);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#FFC107', '#03A9F4', '#E91E63', '#4CAF50', '#FF5722'];
    const initialSizes = [300, 150, 150, 100, 50];
    const balls: IBall[] = [];

    const widthFactor = canvas.width / 1920;
    const heightFactor = canvas.height / 1080;
    const sizeFactor = Math.min(widthFactor, heightFactor);
    const sizes = initialSizes.map(size => size * sizeFactor);

    for (let i = 0; i < colors.length; i++) {
      const radius = sizes[i % sizes.length];
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 4;
      const dy = (Math.random() - 0.5) * 4;
      balls.push(new Ball(x, y, dx, dy, radius, colors[i], ctx, canvas));
    }
    ballsRef.current = balls;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const ball of ballsRef.current) {
        ball.draw();
        ball.update();
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default MovingBouncingBalls;
