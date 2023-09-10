/* tslint:disable */
/* eslint-disable */
/**
*/
export class Particle {
  free(): void;
/**
* @param {number} x
* @param {number} y
* @param {number} vx
* @param {number} vy
* @param {string} color
* @returns {Particle}
*/
  static new(x: number, y: number, vx: number, vy: number, color: string): Particle;
/**
*/
  update(): void;
/**
* @returns {any}
*/
  to_js_value(): any;
}
/**
*/
export class ParticleSystem {
  free(): void;
/**
* @returns {ParticleSystem}
*/
  static new(): ParticleSystem;
/**
* @param {Particle} particle
*/
  add_particle(particle: Particle): void;
/**
*/
  update(): void;
/**
* @returns {Array<any>}
*/
  get_particles(): Array<any>;
}
