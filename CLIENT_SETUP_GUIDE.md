# Labui Maasaimara — Netlify Forms Setup Guide
## Step-by-Step to Receive Form Submissions via Email

---

## ✅ PART 1: What We Already Did (Developer Side)

Your developer (Peter) has already:
- Enabled **form detection** in Netlify
- Added `data-netlify="true"` to your HTML form
- Fixed the form button and thank-you page
- Pushed all changes to GitHub
- Updated `netlify.toml` for proper deployment

**You do NOT need to touch any code.**

---

## ✅ PART 2: What YOU Need to Do (Client Side)

### Step 1: Go to the Right Place in Netlify

1. Open: https://app.netlify.com
2. Log in with your account
3. Click your site: **masaiwarrior**
4. In the left sidebar, click **"Site configuration"** (gear icon ⚙️)

### Step 2: Find Notifications

5. In the left sidebar under Site configuration, look for:
   ```
   Notifications
   ```
   (It may also be under **"Forms"** → **"Usage and configuration"**)

6. Click **"Notifications"**

### Step 3: Add Form Submission Notification

7. Look for the section:
   ```
   Form submission notifications
   ```
8. Click the button: **"Add notification"**

### Step 4: Choose Email

9. Select **"Email notification"** from the dropdown/list

### Step 5: Enter the Email Address

10. In the field labeled **"Email to notify"** or **"Send to"**, enter:
    ```
    antonykirrokor1987@gmail.com
    ```

11. Click **"Save"** or **"Add notification"**

---

## ✅ PART 3: Verify It Works

### Step 6: Check for Verification Email

- Netlify will send a **verification email** to `antonykirrokor1987@gmail.com`
- The client must **check their inbox** and click the verification link
- Also check **Spam/Junk folder** if not in inbox

### Step 7: Test the Live Form

1. Go to your website: **https://masaiwarrior.netlify.app/contact.html**
2. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +254 701 000 000
   - Message: "This is a test submission"
3. Click the **"Send Message"** button
4. You should see the Thank You page

### Step 8: Confirm Email Arrived

- Check `antonykirrokor1987@gmail.com` inbox
- You should receive an email from Netlify with the form data
- If not in inbox, check **Spam/Junk**

---

## 📋 Quick Reference Table

| Task | Where to Go | What to Click | What to Enter |
|------|-------------|---------------|---------------|
| Add email notification | Netlify → Site configuration → Notifications | "Add notification" | `antonykirrokor1987@gmail.com` |
| Verify email address | Client's email inbox | Click verification link | — |
| Test form submission | https://masaiwarrior.netlify.app/contact.html | Fill form + "Send Message" | Test data |
| View all submissions | Netlify → Forms → contact | See table of submissions | — |

---

## 🚨 Troubleshooting

### Problem: "I can't find 'Notifications' in Site configuration"
**Fix:** Look for **"Forms"** in the left sidebar instead. Click it, then look for **"Usage and configuration"** or **"Notifications"** tab.

### Problem: "It says I need to verify the email"
**Fix:** Check the inbox of `antonykirrokor1987@gmail.com`. Look for an email from Netlify. Click the verification link inside. If not found, check Spam folder.

### Problem: "Form submission not showing in Netlify dashboard"
**Fix:** Make sure your latest deploy is published. Go to **"Deploys"** in Netlify and check that the top deploy says **"Published"**.

### Problem: "Email not received after test submission"
**Fix:** 
1. Wait 2-3 minutes (sometimes there's a delay)
2. Check Spam/Junk folder
3. Check if the email notification was saved properly in Netlify
4. Try submitting the form again

---

## 📧 What the Email Will Look Like

When someone submits the form, the email will contain:

```
From: Netlify Forms
Subject: New form submission on masaiwarrior

Name: [what user entered]
Email: [what user entered]
Phone: [what user entered]
Service: [what user selected]
Dates: [what user entered]
Guests: [what user entered]
Message: [what user entered]
```

---

## 🔗 Important Links

- **Your Website:** https://masaiwarrior.netlify.app
- **Contact Page:** https://masaiwarrior.netlify.app/contact.html
- **GitHub Repo:** https://github.com/Lumumba183/labuimasaimara
- **Netlify Dashboard:** https://app.netlify.com

---

## ✅ Final Checklist

| # | Task | Status |
|---|------|--------|
| 1 | Go to Netlify → Site configuration → Notifications | ⬜ |
| 2 | Click "Add notification" | ⬜ |
| 3 | Select "Email notification" | ⬜ |
| 4 | Enter: `antonykirrokor1987@gmail.com` | ⬜ |
| 5 | Click Save | ⬜ |
| 6 | Check email inbox for verification link | ⬜ |
| 7 | Click verification link | ⬜ |
| 8 | Test form on live website | ⬜ |
| 9 | Confirm email arrives with form data | ⬜ |

---

**Questions?** Contact your developer (Peter) or check Netlify docs at https://docs.netlify.com/forms/notifications/

*Document prepared: 2026-06-30*
*For: Labui Maasaimara Safaris & Car Hire*
