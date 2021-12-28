import { shallowMount } from "@vue/test-utils";
import BaseSelect from "@/components/Base/BaseSelect.vue";

describe("BaseSelect.vue", () => {
  const DEFAULT_OPTIONS = ["op1", "op2", "op3"];

  it("renders a select and it's options", () => {
    const wrapper = shallowMount(BaseSelect, {
      props: {
        options: DEFAULT_OPTIONS,
      },
    });

    expect(wrapper.find("select").exists()).toBe(true);
    DEFAULT_OPTIONS.forEach((opt, index) => {
      expect(wrapper.findAll("option")[index].text()).toBe(opt);
    });
  });

  it("renders a :label of a select", () => {
    const label = "My label";
    const wrapper = shallowMount(BaseSelect, {
      props: {
        label,
      },
    });

    expect(wrapper.text()).toContain(label);
  });

  it("sets as a selected the option matching :modelValue", () => {
    const value = DEFAULT_OPTIONS[1];
    const wrapper = shallowMount(BaseSelect, {
      props: {
        modelValue: value,
        options: DEFAULT_OPTIONS,
      },
    });

    const options = wrapper.find("select").findAll("option");
    const selectedOption = options.find((opt) => opt.element.selected);

    expect(selectedOption.text()).toContain(value);
  });

  it("emits @update:modelValue with selected option on click", async () => {
    const value = DEFAULT_OPTIONS[1];
    const wrapper = shallowMount(BaseSelect, {
      props: {
        options: DEFAULT_OPTIONS,
      },
    });
    const select = wrapper.find("select");

    await select.setValue(DEFAULT_OPTIONS[1]);

    expect(wrapper.emitted()["update:modelValue"][0][0]).toBe(value);
  });
});
