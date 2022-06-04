import { Emitter, MeshParticles, ParticlesMaterial } from "@hmans/vfx"
import { GroupProps } from "@react-three/fiber"

export default (props: GroupProps) => (
  <group {...props} scale={0.2}>
    {/* Fire */}
    <MeshParticles scale={0.5}>
      <boxGeometry />
      <ParticlesMaterial color="red" />

      <Emitter spawnCount={10} burstCount={10} burstDelay={0.01} />
    </MeshParticles>

    {/* Smoke */}
    <MeshParticles>
      <sphereBufferGeometry args={[1, 8, 8]} />
      <ParticlesMaterial color="white" />

      <Emitter
        initialDelay={0.1}
        spawnCount={3}
        burstCount={10}
        burstDelay={0.025}
      />
    </MeshParticles>
  </group>
)
