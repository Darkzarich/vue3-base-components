import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/Base/BaseInput.vue";

describe("BaseInput.vue", () => {
  it("renders an input", () => {
    const wrapper = shallowMount(BaseInput);

    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("renders :error", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        error: "error",
      },
    });

    expect(wrapper.find('[id*="input-error"]').exists()).toBe(true);
  });

  it("emits @update:modelValue on input with the input value", () => {
    const wrapper = shallowMount(BaseInput);
    const input = wrapper.find("input");
    const str = "test";

    input.setValue(str);

    expect(wrapper.emitted()["update:modelValue"][0][0]).toBe(str);
  });

  it("passes :modelValue to the input", () => {
    const str = "test";
    const wrapper = shallowMount(BaseInput, {
      props: {
        modelValue: str,
      },
    });
    const input = wrapper.find("input");

    expect(input.element.value).toBe(str);
  });
});
