import { config, mount } from "@vue/test-utils";
import BaseRadio from "@/components/Base/BaseRadio.vue";
import BaseRadioGroup from "@/components/Base/BaseRadioGroup.vue";

config.global.components = {
  BaseRadio,
};

describe("BaseRadioGroup.vue", () => {
  it("renders BaseRadio components from passed :options", () => {
    const options = [
      { label: "t1", value: 0 },
      { label: "t2", value: 1 },
    ];
    const wrapper = mount(BaseRadioGroup, {
      props: { options, name: "test", modelValue: 0 },
    });
    const baseRadios = wrapper.findAllComponents(BaseRadio);

    expect(baseRadios).toHaveLength(options.length);
  });
});
