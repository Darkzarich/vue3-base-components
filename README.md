# vue3-base-components

Hello! 😉

In this repository, I created some well tested base components using some of the good practices with **Vue 3** that can be re-used and adapted for different projects.

The list follows: `BaseButton`, `BaseCheckbox`, `BaseInput`, `BaseRadio`, `BaseRadioGroup`, `BaseSelect`, `BaseTextarea`

Also provided base examples of using them with **[vee-validate@next]**(https://vee-validate.logaretm.com/v4/) (one of the forms uses schema builder **[Yup]**(https://www.npmjs.com/package/yup), just for the practice purposes)

## Few Accessibility tips to keep in mind:

1. Always set `type` for your `<input>`. There are many types that 
can help screen readers and browsers to understand what that input is for:

`checkbox`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `image`, `month`, `number`, `password`, `radio`, `range`, `reset`, `search`, `submit`, `tel`, `text`, `time`, `url`, `week`

2. It's better to separate form inputs into logical groups (such as "Personal Data" etc) and wrap them in `<fieldset>` tag, namings of the groups should should be wrapped in `<legend>` tag. 

In case you don't want to have this tag visible you can always move it *absolutely* outside of the screen 

3. Don't rely on placeholders. Use `<label>` since when user starts typing placeholders are gone and then it's impossible to get what should be written in that input. 

4. Screen readers are not always able to see an error block in an input as a part that is related to the said input. To help it we could specify `aria-describedby="error-span-id"`attribute. 

5. Use `aria-live="assertive"` attribute for input error blocks because it makes screen readers notice them immediately interupting everything else it reads right now. Should only be used for time-sensitive/critical notifications that absolutely require the user's immediate attention and should be used carefully as it may annoy the user

6. When there is an error in input relying on quite widely used red border is a not *accessible* way to go about it. We can notify screen readers about invalid state of an input with `aria-invalid="true"` attribute.

7: Disabling buttons is bad, it makes them invisible for screen readers

## Few tips about testing in Vue

1. Test public interface of a component: inputs (props, user interactions, lifecycle methods) 
and outputs (events, rendered output). Sometimes you could test the boundaries between the parent and the child components.

2. If we have a logic in a component, we probably wanna test it

3. Implementation details are not something you should test 
(we test that the result with given outputs is what it should be, how it does that inside is out of our concern)

4. Don't test the functionality of the packages and frameworks, those should be well tested already, we should trust them as is

