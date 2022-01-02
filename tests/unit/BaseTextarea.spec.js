import { shallowMount } from "@vue/test-utils";
import BaseTextarea from "@/components/Base/BaseTextarea.vue";

describe("BaseTextarea.vue", () => {
  it("renders a textarea", () => {
    const wrapper = shallowMount(BaseTextarea);

    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("emits @update:modelValue on input with the textarea value", async () => {
    const wrapper = shallowMount(BaseTextarea);
    const textarea = wrapper.find("textarea");
    const str = "test";

    await textarea.setValue(str);

    expect(wrapper.emitted()["update:modelValue"][0][0]).toBe(str);
  });

  it("passes :modelValue to the textarea", () => {
    const str = "test";
    const wrapper = shallowMount(BaseTextarea, {
      props: {
        modelValue: str,
      },
    });
    const textarea = wrapper.find("textarea");

    expect(textarea.element.value).toBe(str);
  });
});
