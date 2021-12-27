import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/Base/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("renders a button", () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  // Probably shouldn't be tested as it tests the framework
  it("renders slot content inside button", () => {
    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: "Content",
      },
    });
    expect(wrapper.find("button").text()).toContain("Content");
  });

  it("runs loading state if the prop was passed", async () => {
    const wrapper = shallowMount(BaseButton, {
      props: { loading: true },
    });
    expect(wrapper.find(".button--loading").exists()).toBe(true);
    await wrapper.setProps({ loading: false });
    expect(wrapper.find(".button--loading").exists()).toBe(false);
  });
});
