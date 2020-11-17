attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying vec2 altTexCoord;

uniform sampler2D uSampler2;

void main() {
    vec4 offset = texture2D(uSampler2, aTextureCoord);
	vec4 offsetVec = vec4(aVertexPosition + aVertexNormal * 15.0*offset.rgb , 1.0);

	gl_Position = uPMatrix * uMVMatrix * offsetVec;

	vTextureCoord = aTextureCoord;
	altTexCoord = vec2(1.0 - offset.r);
}
