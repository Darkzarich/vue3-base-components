import { shallowMount } from "@vue/test-utils";
import BaseRadio from "@/components/Base/BaseRadio.vue";

describe("BaseRadio.vue", () => {
  it("renders an radio button", () => {
    const wrapper = shallowMount(BaseRadio, { props: { value: 1 } });

    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });

  it("renders a :label of a radio", () => {
    const label = "My label";
    const wrapper = shallowMount(BaseRadio, {
      props: {
        label,
        value: "_",
      },
    });

    expect(wrapper.text()).toContain(label);
  });

  it("emits @update:modelValue with passed value on click", async () => {
    const value = 1;
    const wrapper = shallowMount(BaseRadio, {
      props: {
        value,
      },
    });
    const radio = wrapper.find("input");

    await radio.trigger("change");

    expect(wrapper.emitted()["update:modelValue"][0][0]).toBe(value);
  });

  it("is selected if :modelValue and :value equal", async () => {
    const value = "yes";
    const wrapper = shallowMount(BaseRadio, {
      props: {
        modelValue: value,
        value,
      },
    });

    expect(wrapper.find("input").element.checked).toBeTruthy();
  });
});
