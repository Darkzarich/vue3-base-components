import { createApp } from "vue";
import App from "./App";

import BaseButton from "@/components/Base/BaseButton";
import BaseInput from "@/components/Base/BaseInput";
import BaseTextarea from "@/components/Base/BaseTextarea";
import BaseSelect from "@/components/Base/BaseSelect";
import BaseCheckbox from "@/components/Base/BaseCheckbox";
import BaseRadio from "@/components/Base/BaseRadio";
import BaseRadioGroup from "@/components/Base/BaseRadioGroup";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseTextarea", BaseTextarea);
app.component("BaseSelect", BaseSelect);
app.component("BaseCheckbox", BaseCheckbox);
app.component("BaseRadio", BaseRadio);
app.component("BaseRadioGroup", BaseRadioGroup);

app.mount("#app");
