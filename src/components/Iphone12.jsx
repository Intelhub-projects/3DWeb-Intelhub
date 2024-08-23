// import React, { useRef } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'

// function Model(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('/Iphone_12_pro_max.glb')
//   const { actions } = useAnimations(animations, group)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group
//           name="Iphone"
//           position={[0.195, -2.154, -2.095]}
//           rotation={[Math.PI / 2, 0, -2.513]}
//           scale={2.048}>
//           <mesh
//             name="Plane"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane.geometry}
//             material={materials['Back of Iphone']}
//           />
//           <mesh
//             name="Plane_1"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_1.geometry}
//             material={materials['Matallic Sides']}
//           />
//           <mesh
//             name="Plane_2"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_2.geometry}
//             material={materials.bassels}
//           />
//           <mesh
//             name="Plane_3"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_3.geometry}
//             material={materials.Screen}
//           />
//           <mesh
//             name="Plane_4"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_4.geometry}
//             material={materials['Intina Black']}
//           />
//           <mesh
//             name="Plane_5"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_5.geometry}
//             material={materials['Matallic Sides Button']}
//           />
//           <mesh
//             name="Plane_6"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_6.geometry}
//             material={materials['Camera bump top']}
//           />
//           <mesh
//             name="Plane_7"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_7.geometry}
//             material={materials['Camera Glass']}
//           />
//           <mesh
//             name="Plane_8"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_8.geometry}
//             material={materials.Lidar}
//           />
//           <mesh
//             name="Plane_9"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_9.geometry}
//             material={materials.Flash}
//           />
//           <mesh
//             name="Plane_10"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_10.geometry}
//             material={materials['Camera Inside ']}
//           />
//           <mesh
//             name="Plane_11"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_11.geometry}
//             material={materials['Camera Ball']}
//           />
//           <mesh
//             name="Plane_12"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_12.geometry}
//             material={materials['Camera Inside White']}
//           />
//           <mesh
//             name="Plane_13"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_13.geometry}
//             material={materials['Camera Matallic Sides.']}
//           />
//           <mesh
//             name="Plane_14"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_14.geometry}
//             material={materials['Apple logo']}
//           />
//           <mesh
//             name="Plane_15"
//             castShadow
//             receiveShadow
//             geometry={nodes.Plane_15.geometry}
//             material={materials['Material.002']}
//           />
//         </group>
//       </group>
//     </group>
//   )
// }

// export default Model

// useGLTF.preload('models/Iphone_12_pro_max.glb')

