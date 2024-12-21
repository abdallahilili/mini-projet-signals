
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mini-projet-signals/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/mini-projet-signals/home",
    "route": "/mini-projet-signals"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/home"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/simple-list"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/signals"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/custom-validation"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/angular-json"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/tsconfig"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/courses"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/basic-sig"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/custom-without-regex"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/custom-with-regex"
  },
  {
    "renderMode": 2,
    "route": "/mini-projet-signals/age-validation"
  }
],
  assets: {
    'index.csr.html': {size: 19773, hash: 'bba5c09b1cd304f877a30718164bc5a376f5a755f001129d3731a97aef9f97c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7994, hash: 'ff6162f292dde787df0c796564d056b508c7018ae2eba78267b495df086f16b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 64542, hash: '1c7417082895747bfcaf67e948ea21214fe3460c21e4e877e4e18f5d7c11dfcb', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'simple-list/index.html': {size: 101153, hash: 'ecb8d6c0da04cf682dcac7762b8279c33d840adca946fab59dd988a4c219fabb', text: () => import('./assets-chunks/simple-list_index_html.mjs').then(m => m.default)},
    'custom-validation/index.html': {size: 78901, hash: 'ffabc80e578fd812f704ba0dbbd5005568d603ae3689dee1b026314faddefb84', text: () => import('./assets-chunks/custom-validation_index_html.mjs').then(m => m.default)},
    'angular-json/index.html': {size: 86148, hash: '423cd7a59c186f6c5573a9f27eab93050f56fe45a03ff2fc4f746be29e12bdd0', text: () => import('./assets-chunks/angular-json_index_html.mjs').then(m => m.default)},
    'tsconfig/index.html': {size: 69020, hash: '7683cee571c038645b2aa5f92738755858c87932ee35a38c46378ce9307fa82e', text: () => import('./assets-chunks/tsconfig_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 91515, hash: '228487d8d6705b06b85c6d573a92b259ff41d52e4dc0d80bbc2060dacf15aa7c', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'basic-sig/index.html': {size: 60008, hash: '8bad3c17e7eb1747d2aea428a77c53455e64207050e61d6bba89a654b9cb2544', text: () => import('./assets-chunks/basic-sig_index_html.mjs').then(m => m.default)},
    'signals/index.html': {size: 79442, hash: '24e999f301e869e1a6fde9443262149d300b1e25fa32fb2d05a734faa8bf0748', text: () => import('./assets-chunks/signals_index_html.mjs').then(m => m.default)},
    'custom-without-regex/index.html': {size: 124154, hash: '76c09e9321883ccbfedcc8be45f06a63c3ce56f1c2b6e4c2343935ff0648e5c0', text: () => import('./assets-chunks/custom-without-regex_index_html.mjs').then(m => m.default)},
    'custom-with-regex/index.html': {size: 123342, hash: '6d1f532e60d8b273023d175385989f33dc0307287319c7f20e5bcd8345e33b4e', text: () => import('./assets-chunks/custom-with-regex_index_html.mjs').then(m => m.default)},
    'age-validation/index.html': {size: 117202, hash: '9bcbf925e77a31fc333e59b385b235f20fc4f80294d4f5eb6efacb9fb6060bd4', text: () => import('./assets-chunks/age-validation_index_html.mjs').then(m => m.default)},
    'styles-TDP4S5FV.css': {size: 348017, hash: 'Z7tofdQ2Hf8', text: () => import('./assets-chunks/styles-TDP4S5FV_css.mjs').then(m => m.default)}
  },
};
