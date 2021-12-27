import { shallowMount } from "@vue/test-utils";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";

describe("BaseCheckbox.vue", () => {
  it("renders a checkbox", () => {
    const wrapper = shallowMount(BaseCheckbox);

    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it("renders a :label of a checkbox", () => {
    const label = "My label";
    const wrapper = shallowMount(BaseCheckbox, {
      props: {
        label,
      },
    });

    expect(wrapper.text()).toContain(label);
  });

  it("emits @update:modelValue on checkbox click with an opposite value", async () => {
    const wrapper = shallowMount(BaseCheckbox);
    const currentValue = wrapper.vm.modelValue;

    await wrapper.find("input").trigger("change");

    const emitted = wrapper.emitted()["update:modelValue"];

    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toBe(!currentValue);
  });

  it("is checked if :modelValue = true", async () => {
    const wrapper = shallowMount(BaseCheckbox, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.find("input").element.checked).toBeTruthy();
  });
});
