


//three js adds this for you 
// uniform mat4 projectionMatrix;
// uniform mat4 modelViewMatrix;

// attribute vec3 position;

attribute vec3 simonDevColor;
//trhis is so we can make the attribute above availble to the fragment shader 
varying vec3 vColor;
varying vec2 vUvs;

void main() {	
  vec4 localPosition = vec4(position, 1.0);


  gl_Position = projectionMatrix * modelViewMatrix * localPosition;
}
