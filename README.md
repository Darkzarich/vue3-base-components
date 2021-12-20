# vue3-base-components

Hello!

In this repository, I created some base components with Vue 3 that can be re-used and adapted for different projects using some of the good practices.

The list follows: `BaseButton`, `BaseCheckbox`, `BaseInput`, `BaseRadio`, `BaseRadioGroup`, `BaseSelect`, `BaseTextarea`

## Few Accessibility tips to keep in mind:

1. Always set `type` for your `<input>`. There are many types that 
can help screenreaders and browsers to understand what that input is for:

`checkbox`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `image`, `month`, `number`, `password`, `radio`, `range`, `reset`, `search`, `submit`, `tel`, `text`, `time`, `url`, `week`

2. It's better to separate form inputs into logical groups (such as "Personal Data" etc) and wrap them in `<fieldset>` tag, namings of the groups should should be wrapped in `<legend>` tag. 

In case you don't want to have this tag visible you can always move it *absolutely* outside of the screen 

3. Don't rely on placeholders. Use `<label>` since when user starts typing placeholders are gone and then it's impossible to get what should be written in that input. 


