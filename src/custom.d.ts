/// <reference types="vite/client" />
import { ThreeElement } from '@react-three/fiber'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>
  }
}

declare module '*.JPG' {
  const src: string;
  export default src;
}
