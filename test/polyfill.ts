import { Window } from 'happy-dom';

const window = new Window();

for (const key of [
    'Text',
    'Element',
    'HTMLElement',
    'HTMLUnknownElement',
    'ShadowRoot',
    'Document',
    'NodeFilter',
    'DOMParser',
    'XMLSerializer',
    'document',
    'window'
])
    Reflect.set(globalThis, key, window[key]);
