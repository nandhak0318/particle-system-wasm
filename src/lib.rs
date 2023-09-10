mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}


#[wasm_bindgen]
#[derive(Debug)]
pub struct Particle {
    x: f64,
    y: f64,
    vx: f64,
    vy: f64,
    color: String,
}

#[wasm_bindgen]
impl Particle {
    pub fn new(x: f64, y: f64, vx: f64, vy: f64, color: &str) -> Particle {
        Particle { x, y, vx, vy, color: color.to_string() }
    }

    pub fn update(&mut self) {
        // Implement particle update logic (e.g., update position based on velocity)
        self.x += self.vx;
        self.y += self.vy;
    }

     pub fn to_js_value(&self) -> JsValue {
        let obj = js_sys::Object::new();
        js_sys::Reflect::set(&obj, &JsValue::from_str("x"), &JsValue::from_f64(self.x)).unwrap();
        js_sys::Reflect::set(&obj, &JsValue::from_str("y"), &JsValue::from_f64(self.y)).unwrap();
        js_sys::Reflect::set(&obj, &JsValue::from_str("vx"), &JsValue::from_f64(self.vx)).unwrap();
        js_sys::Reflect::set(&obj, &JsValue::from_str("vy"), &JsValue::from_f64(self.vy)).unwrap();
        js_sys::Reflect::set(&obj, &JsValue::from_str("color"), &JsValue::from_str(&self.color)).unwrap();
        
        obj.into()
    }
}


#[wasm_bindgen]
pub struct ParticleSystem {
    particles: Vec<Particle>,
}

#[wasm_bindgen]
impl ParticleSystem {
    pub fn new() -> ParticleSystem {
        ParticleSystem { particles: Vec::new() }
    }

    pub fn add_particle(&mut self, particle: Particle) {
        self.particles.push(particle);
    }

    pub fn update(&mut self) {
        for particle in &mut self.particles {
            particle.update();
        }
    }
    pub fn get_particles(&self) -> js_sys::Array {
        let js_particles = js_sys::Array::new();
        for particle in &self.particles {
            js_particles.push(&particle.to_js_value());
        }
        js_particles
    }
       
}
