attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform float normScale;
uniform float timeFactor;

void main() {
    vec2 offset2 = vec2(abs(sin(timeFactor*0.005)),abs(cos(timeFactor*0.005)));

    vec4 offset = texture2D(uSampler2, aTextureCoord*offset2);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + 0.05*offset.r , 1.0);

	vTextureCoord = aTextureCoord + 0.001 * timeFactor;
}

