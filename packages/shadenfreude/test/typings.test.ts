import { Color, Vector3 } from "three"
import { AddNode, float, FloatNode, ShaderNode, vec3 } from "../src"

describe("typings", () => {
  test("creating simple nodes", () => {
    ShaderNode({
      name: "I'm a dummy"
    })
  })

  test("accessing variables", () => {
    const node = ShaderNode({
      in: { foo: float() },
      out: { foo: float() }
    })

    node.in.foo
    node.out.foo
  })

  test("directly assigning JS values", () => {
    ShaderNode({
      in: { foo: vec3(new Vector3()) }
    })

    ShaderNode({
      in: { foo: vec3(new Color()) }
    })
  })

  test("assigning variables", () => {
    const f1 = FloatNode({ value: 1 })
    const f2 = FloatNode({ value: 2 })

    AddNode({
      a: f1.out.value,
      b: f2.out.value
    })
  })

  test("assigning nodes", () => {
    const f1 = FloatNode({ value: 1 })
    const f2 = FloatNode({ value: 2 })

    AddNode({
      a: f1,
      b: f2
    })
  })
})