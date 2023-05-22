
const luminanceMapURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEl0lEQVRYR42XjVEiQRBGZyOADCQDyQCMADIQIwAjECNAIgAiQCMAIwAz0AwwgrVe172pZsurO6qo2Znt6f7665+ZbUopbSmlLBYLhjKfz2Pkdz6fy+VyKe/v72UymcTI73g8VpnNZhPPz8/PMd7f39f5fr8vu92uyt7c3MTzYDAI3fwaAaxWq1gYDocxshEh5oy8B8BoNIrx9fU15P4G4PPzs3x9fVXjOHB3dxd6WBdMczgcWtCDCuUfHx+xqd/vx8gaz29vbzFfLpcxypgW9AhZ/ugDJM8wpjyM8gNQMLBcLtuXl5cQnE6nFbEK2SCtgLu9vb0CuF6vr5jDKMY1PJvNKt0IakMGawigEibG43H1HOMowghKZUSWtttteMaIYjzFoD/WCQU/9PLsnNCiswJAICcXVAOAv7nAZhWhXI/Y535ziHcCUlYgrAMYFprNZhNVgKHHx8fwSM8dYYGkIQ+IHUxJJSExOWEGsBmQDAEMB/IYOQAAFEAHSKEQBSYhQlYCz8ihiPeGgLls5djn0GTD6GfO2Oz3+9bNACHhjDECzqkGGWAEiO8pq16vV3vB09NTADRpHx4eyul0qsBh6fv7O0BHFUgZnugh3hrz3A9ATtUQgiwrIzCoHgxkxixBZHU6GAApHuCJvYDYEmu8yTE3w5HHC/OHHGG/oZMRABmKnAO1DGGAjCdZMnIVmxu+N8aEBgDG/zc5DOOpCYus/cVyb6bTaYTAOucswGOTBoMIsxEFvLcv2KRo24YG4HgNg+YM1cWaVYUuQ1P7ACyY3QqaG8xRiCG8QdaeLlM5B1hjriGYIJSEKOcB9oKBXPc5aVBgDGXIHDCRatv78+BJB1AMmxPObWSsBwCSUErxkriaNADQExRkZggFHpkDJK9J6Hngfjsg1ePPTtusVqtoRFKDB5YPme0dQCC2XPsA1PITDLkAAOQYc1liVMPswdFmsVi0Zj+LGDWpZKTbmgWbzwgYYB/VwQgADHg2MNo51RchAIA3H4RQpEe2ZOs3e4SMSWa7NiFNQvZxdgCIkHmzojrYy7sIgdkt5SZO7owmZzcZbUAes1mONVs4zFDelijNL07D8XjceoORslwqUokHbMKAXVCj7DO7BZDvljDi3TAf13Ea0gk16GmYc8J35IPHrZlslzNU3icA4xUP2gHDgWRocukGA5YJozngLVdhj2RbqHdDytN+kRULquuxFxzB/hOAhh2JpbdalPEMANcFYW5gqFtFAmasANyYaWStOzfj84VFr2Tyf+aGtun3+22myed8B8hl5joASEa7KKFh7vUdRjBCZ/1tXblIwuypHhtjr0+UjF0Oed/nppT1tG2oLU3DeVcK8/ws4zUEeu69348VPc7U+1XDmtc35JRFl19aVxn/C5hmNptFK6YrQYu9njEfw91G5Glm62W/n2Ky4vEuiFxhHmYRAtsi8bRn+4HhoYMB3rMRoBrhMKLJeDznTpkB+E0JGMLpLaleSm2Vntv5HoBRO5md0c7n6B1PYBjia8tSBSDHsaG+6gPefrtfONkDAMJAvvfzXkW5LDHux6hfRYasC+AHeG3RHuX02swAAAAASUVORK5CYII=';
const fontURL = 'data:image/png;base64,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';

// this is just for code highlighting in VSCode
// via the glsl-literal extension
const glsl = x => x;

const frag = glsl`
precision highp float;

uniform float width;
uniform float height;
uniform float time;

uniform sampler2D camTexture;
uniform sampler2D fontTexture;
uniform sampler2D lumTexture;

const int useSobel = 0;
const int zoom = 1;

// normalize coords and correct for aspect ratio
vec2 normalizeScreenCoords()
{
  float aspectRatio = width / height;
  vec2 result = 2.0 * (gl_FragCoord.xy / vec2(width, height) - 0.5);
  result.x *= aspectRatio;
  return result;
}

float deform(vec2 p, float factor) {
  return sin(time * .1 + factor * p.x) * cos(time * .1 + factor * p.y);
}

vec4 invert(vec4 color) {
  return vec4(1.0 - color.rgb, 1.0);
}

vec4 grey(vec4 color) {
  // float val = (color.x + color.y + color.z) / 3.0;
  float val = 0.3 * color.x + 0.59 * color.y + 0.11 * color.z;
  return vec4(vec3(val), 1.0);
}

vec2 getTexCoords(vec2 position) {
  return 1.0 - position.xy / vec2(width, height);
}

float luminance(vec3 color) {
  return 0.2126*color.x + 0.7152*color.y + 0.0722*color.z;
}

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

vec2 camCoord(vec2 coord) {
  return 1.0 - coord / vec2(width, height);
} 


vec4 sobel(in sampler2D tex, in vec2 coord) {
  float w = 1.0 / width;
  float h = 1.0 / height;
  vec4 n0 = texture2D(tex, coord + vec2(-w, -h));
  vec4 n1 = texture2D(tex, coord + vec2( 0, -h));
  vec4 n2 = texture2D(tex, coord + vec2( w, -h));
  vec4 n3 = texture2D(tex, coord + vec2(-w,  0));
  vec4 n4 = texture2D(tex, coord);
  vec4 n5 = texture2D(tex, coord + vec2( w, 0));
  vec4 n6 = texture2D(tex, coord + vec2(-w, h));
  vec4 n7 = texture2D(tex, coord + vec2( 0, h));
  vec4 n8 = texture2D(tex, coord + vec2( w, h));
  vec4 edgeH = n2 + (2.0 * n5) + n8 - (n0 + (2.0 * n3) + n6);
  vec4 edgeV = n0 + (2.0 * n1) + n2 - (n6 + (2.0 * n7) + n8);
  vec4 sobel = sqrt((edgeH * edgeH) + (edgeV * edgeV));
  return sobel;
}

vec2 getFontCoord(int i) {
  float chY = floor(float(i) / 16.);
  float chX = mod(float(i), 16.);
  vec2 fontCoord = vec2((chX * 8. + mod(gl_FragCoord.x / float(zoom), 8.)) / 128., (chY * 8. + (8. - mod(gl_FragCoord.y / float(zoom), 8.))) / 128.);
  return fontCoord;
}

vec2 getLumCoord(in int i, in vec2 p) {
  float chY = floor(float(i) / 16.);
  float chX = mod(float(i), 16.);
  vec2 lumCoord = vec2((chX * 2. + p.x) / 32., (chY * 2. + 2. - p.y) / 32.);
  return lumCoord;
}


vec4 averageBlockColor() {
  vec2 a = floor(gl_FragCoord.xy / (float(zoom) * 8.)) * float(zoom) * 8.;
  vec2 b = a + vec2(4, 0) * float(zoom);
  vec2 c = b + vec2(0, 4) * float(zoom);
  vec2 d = c + vec2(4, 4) * float(zoom);
  vec4 c0 = useSobel == 1 ? grey(sobel(camTexture, camCoord(a))) : grey(texture2D(camTexture, camCoord(a)));
  vec4 c1 = useSobel == 1 ? grey(sobel(camTexture, camCoord(b))) : grey(texture2D(camTexture, camCoord(b)));
  vec4 c2 = useSobel == 1 ? grey(sobel(camTexture, camCoord(c))) : grey(texture2D(camTexture, camCoord(c)));
  vec4 c3 = useSobel == 1 ? grey(sobel(camTexture, camCoord(d))) : grey(texture2D(camTexture, camCoord(d)));

  float minDist = 9999.;
  int minIdx = 32;
  for (int i = 32; i < 127; i++) {
    int chY = 16 - i / 16;
    int chX = int(mod(float(i), 16.));
    vec4 l0 = texture2D(lumTexture, getLumCoord(i, vec2(0. ,0.)));
    vec4 l1 = texture2D(lumTexture, getLumCoord(i, vec2(1. ,0.)));
    vec4 l2 = texture2D(lumTexture, getLumCoord(i, vec2(0. ,1.)));
    vec4 l3 = texture2D(lumTexture, getLumCoord(i, vec2(1. ,1.)));
    float dist = length(vec4(
      c0.x - l0.x,
      c1.x - l1.x,
      c2.x - l2.x,
      c3.x - l3.x
    ));
    if (dist < minDist) {
      minIdx = i;
      minDist = dist;
    }
  }
  // minIdx = 64;
  vec2 p = mod(gl_FragCoord.xy / 2.0, 8.);
  // float cY = floor(16. - float(minIdx) / 16.);
  // float cX = mod(float(minIdx), 16.);
  vec2 fontCoord = getFontCoord(minIdx);
  return texture2D(fontTexture, fontCoord);


  // return c0;
}

void main() {
  vec2 p = normalizeScreenCoords();
  vec2 coord = 1.0 - gl_FragCoord.xy / vec2(width, height);

 
  gl_FragColor = averageBlockColor(); // texture2D(camTexture, coord);
  
  // display a single character from the charset (in a 16x16 table)

  //float chX = 2.;
  //float chY = 11.;
  //vec2 fontCoord = vec2((chX * 8. + mod(gl_FragCoord.x / 8., 8.)) / 128., (chY * 8. + (8. - mod(gl_FragCoord.y / 8., 8.))) / 128.);
  //gl_FragColor = texture2D(fontTexture, fontCoord);

  //float chX = 0.;
  //float chY = 1.;
  //vec2 lumCoord = vec2((chX * 2. + mod(gl_FragCoord.x / 8., 2.)) / 32., (chY * 2. + (2. - mod(gl_FragCoord.y / 8., 2.))) / 32.);
  //gl_FragColor = texture2D(lumTexture, lumCoord);


}
`;

const vert = glsl`
precision mediump float;
attribute vec2 position;

void main () {
  gl_Position = vec4(position, 0, 1.0);
}
`;

let video = document.querySelector('video');
let fallbackImage = null;

let camTexture = null;
let fontTexture = null;
let lumTexture = null;

const glea = new GLea({
    glOptions: {
        preserveDrawingBuffer: true
    },
    shaders: [
        GLea.fragmentShader(frag),
        GLea.vertexShader(vert)
    ],
    buffers: {
        'position': GLea.buffer(2, [1, 1, -1, 1, 1, -1, -1, -1])
    }
}).create();

window.addEventListener('resize', () => {
    glea.resize();
});

function loop(time) {
    const { gl } = glea;
    // Upload the image into the texture.
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video || fallbackImage);
    if (video) {
        glea.setActiveTexture(0, camTexture);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, video);
    }

    glea.clear();
    glea.uni('width', glea.width);
    glea.uni('height', glea.height);
    glea.uni('time', time * .005);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(loop);
}

function accessWebcam(video) {
    return new Promise((resolve, reject) => {
        const mediaConstraints = { audio: false, video: { width: 1280, height: 720, brightness: { ideal: 2 } } };
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(mediaStream => {
            video.srcObject = mediaStream;
            video.setAttribute('playsinline', true);
            video.onloadedmetadata = (e) => {
                video.play();
                resolve(video);
            };
        }).catch(err => {
            reject(err);
        });
    });
}

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(img);
        };
    });
}

function takeScreenshot() {
    const { canvas } = glea;
    const anchor = document.createElement('a');
    anchor.setAttribute('download', 'selfie.jpg');
    anchor.setAttribute('href', canvas.toDataURL('image/jpeg', 0.92));
    anchor.click();
}

async function setup() {
    const { gl } = glea;
    try {
        await accessWebcam(video);
    } catch (ex) {
        video = null;
        console.error(ex.message);
    }
    // video = null;
    if (!video) {
        try {
            fallbackImage = await loadImage('https://placekitten.com/1280/720');
        } catch (ex) {
            console.error(ex.message);
            return false;
        }
    }



    const [fontImage, lumImage] = await Promise.all([
        loadImage(fontURL),
        loadImage(luminanceMapURL)
    ]);

    camTexture = glea.createTexture(0);
    // Upload the image into the texture.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video || fallbackImage);

    fontTexture = glea.createTexture(1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, fontImage);

    lumTexture = glea.createTexture(2);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, lumImage);

    glea.setActiveTexture(0, camTexture);

    glea.uniI('camTexture', 0);
    glea.uniI('fontTexture', 1);
    glea.uniI('lumTexture', 2);
    loop(0);
}

setup();
