import { shallowMount } from "@vue/test-utils";
import PasswordInput from "@/components/base/PasswordInput.vue";

const createComponent = () => shallowMount(PasswordInput, {});

describe("PasswordInput", () => {
  it("show password", async () => {
    const wrapper = createComponent();
    const toggleButton = wrapper.find(".password-input__button");
    const passwordInput = wrapper.find("input");
    expect(passwordInput.attributes("type")).toBe("password");
    await toggleButton.trigger("click");
    expect(passwordInput.attributes("type")).toBe("text");
  });
});
