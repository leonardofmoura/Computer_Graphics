#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec2 altTexCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {
	vec4 texColor = texture2D(uSampler, vTextureCoord);
	vec4 altColor = texture2D(uSampler3, altTexCoord);
	
	gl_FragColor = altColor * texColor;
}