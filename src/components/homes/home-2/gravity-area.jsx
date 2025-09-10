import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const DraggableImagePhysics = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  const images = [
    'https://adverchitects.com/red_panda/announcement.png',
    'https://adverchitects.com/red_panda/arrow_icon.png',
    'https://adverchitects.com/red_panda/box.png',
    'https://adverchitects.com/red_panda/button_white.png',
    'https://adverchitects.com/red_panda/Buttons.png',
    'https://adverchitects.com/red_panda/Chips.png',
    'https://adverchitects.com/red_panda/container_icon.png',
    "https://adverchitects.com/red_panda/heart_red.png",
    "https://adverchitects.com/red_panda/Icons.png",
    "https://adverchitects.com/red_panda/play_button.png",
    "https://adverchitects.com/red_panda/quote_round.png",
    "https://adverchitects.com/red_panda/Round_arrow_Button.png",
    "https://adverchitects.com/red_panda/round_corner.png",
    "https://adverchitects.com/red_panda/setting_button.png",
    "https://adverchitects.com/red_panda/switch.png"
  ];

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = engineRef.current;
    const world = engine.world;

    const width = 1320;
    const height = 380;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: '#ffffff'
      }
    });

    Render.run(render);

    // Use fixed timestep to avoid maxFrameTime warnings
    const runner = Runner.create({ isFixed: true, delta: 1000 / 60 });
    Runner.run(runner, engine);

    // Ground and walls
    const ground = Bodies.rectangle(width / 2, height + 30, width, 60, {
      isStatic: true,
      render: { fillStyle: '#fde9e9' }
    });
    const leftWall = Bodies.rectangle(-10, height / 2, 20, height, {
      isStatic: true,
      render: { fillStyle: '#fde9e9' }
    });
    const rightWall = Bodies.rectangle(width + 10, height / 2, 20, height, {
      isStatic: true,
      render: { fillStyle: '#fde9e9' }
    });

    World.add(world, [ground, leftWall, rightWall]);

    // Shuffle images before adding
    const shuffledImages = images
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    shuffledImages.forEach((img, index) => {
      const box = Bodies.rectangle(100 + index * 100, 100, 80, 80, {
        render: {
          sprite: {
            texture: img,
            xScale: 0.5,
            yScale: 0.5
          }
        }
      });
      World.add(world, box);
    });

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div className="col-12 gravity" ref={sceneRef} />;
};

export default DraggableImagePhysics;
