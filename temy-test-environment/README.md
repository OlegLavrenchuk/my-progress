# Temy Test Environment

Basic environment of the test task includes mock-server with database for API calls and src folder for written code.

## General requirements

You need to create a single page application (one HTML-page) which consists of the registration form and registered users list which should be updated after adding a new user.

You are free in choosing instruments and ways of task completion except requirements mentioned in the sections below.

Please don't use jQuery, some developers believe that jQuery is protecting us from a great demon of browser incompatibility when, in truth, post-IE8, browsers are pretty easy to deal with on their own.

The task should be implemented with vanilla JS (JavaScript only) or with React (as a React SPA).

Estimated time for this task is `5 working days or 40 hours`, missing this deadline will be considered as an uncompleted task.

## Where to start from

For this task you need only the latest version of `Node.js` and `GitHub` account.

1. Make a copy of the project with command:
   `git clone`;
2. Get aware of all requirements to this task;
3. Read the instruction for installation and usage of `mock-server` which is located in README file in `aside/mock-server` folder;
4. Save your code in `src` folder.

## After task completion

After task is finished code should be uploaded to your personal GitHub repository. Link to it should be sent for review. Good commit messages are welcome.

No corrections are allowed after link has been shared with us.

Before sending please check and test your code carefully. Tasks which don't work correctly, tasks with partial completion and non-compliant tasks will not be reviewed.

## HTML page requirements

You can choose any page design which matches your preferences. Page should be rendered correctly on desktop and mobile devices, on latest versions of popular browsers: Edge, Safari, Chrome, Firefox.

Please use HTML frameworks such as Bootstrap, Material or any other. It will save your time and make easier task review.

## Registration form requirements

**Form should consist of the next fields:**

- Name (required);
- Email (required);
- Country (required);
- State (required);
- City (required);
- Phone Number (required);
- Address (optional);
- About me (optional).

Please use asterisk symbol for required fields.

**Field types and default values:**

- Name: `<input>`, empty;
- Email: `<input>`, empty;
- Country: `<select>`, non-selected;
- State: `<select>`, non-selected, hidden;
- City: `<select>`, non-selected, hidden;
- Phone Number: `<input>`, empty;
- Address: `<input>`, empty;
- About me: `<textarea>`, empty.

Empty fields should contain placeholders.

**Following fields should be validated and accept only next values:**

- Name: only letters;
- Email: only letters, numbers, and `@` sign, only correct email should be accepted (please use HTML5 validation);
- Phone Number: only numbers;
- About me: maximum length 500.

**Country, State, City fields:**

Data for these fields should be taken from mock-server. Before the country is chosen city and state have to be hidden. After you choose country state appears, after you choose state city appears. It is a strict order.

**Form submitting:**

Form can be submitted only by clicking "Submit" button. Only valid form with all filled required fields can be submitted. Invalid fields should be highlighted.

## Sending data requirements

Data should be sent to the mock-server in JSON format. Don't forget about headers, you should add `Content-Type: application/json` to your POST-request.

**Anatomy of user object:**

```javascript
{
  "id": string,
  "name": string,
  "email": string,
  "phone_number": string,
  "address": string,
  "about_me": string,
  "country_id": string,
  "state_id": string,
  "city_id": string,
  "createdAt": number
}
```

- "id" and "createadAt" will be add automatically by server.
- "address" and "about me" should be `null` if empty.

## User list requirements

User data is getting from mock-server. Next data should be rendered:

- Name;
- Email;
- Phone number;
- Country, state, city names;
- Creation date.

List should be updated each time after adding new user.

## Related links

- [GitHub Guides](https://guides.github.com/)
- [Git Book](https://git-scm.com/)
- [Form data validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
- [Javascript form validation using regular expressions](http://form.guide/snippets/javascript-form-validation-using-regular-expression.html)
- [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
- [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [API Testing using Postman](https://medium.com/aubergine-solutions/api-testing-using-postman-323670c89f6d)
