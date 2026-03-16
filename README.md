# Nextin Website - Netlify Forms Setup

This project has been configured to work with Netlify's auto-detect forms feature.

## Form Configuration

### Files Added/Modified:

1. **`netlify.toml`** - Netlify configuration file with:
   - Build settings pointing to `dist` folder
   - Form auto-detection enabled
   - Redirects for SPA routing

2. **`src/static-form.html`** - Hidden static form for Netlify auto-detection
   - Contains all form fields that Netlify needs to detect
   - Hidden from users but visible to Netlify during build

3. **`src/components/FormSection.vue`** - Updated Vue form with:
   - Proper Netlify form attributes (`netlify` and `data-netlify="true"`)
   - Hidden input for selected services
   - Correct form field names matching the static form

## Deployment Instructions

### 1. Build the Project
```bash
npm run build
```

**Important**: The build process will automatically copy the static form to the public directory for Netlify detection.

### 2. Deploy to Netlify

#### Option A: Drag and Drop
1. Build your project: `npm run build`
2. Drag the `dist` folder to Netlify's deployment area

**Note**: The static form is now included in your `index.html` file, so Netlify will detect it automatically during deployment.

#### Option B: Connect Git Repository
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 3. Verify Form Detection

After deployment:

1. Go to your Netlify dashboard
2. Navigate to **Forms** section
3. You should see your `contact` form listed
4. Test the form by submitting it

## Form Fields

The form includes these fields:
- `name` (required)
- `email` (required) 
- `phone`
- `services` (checkbox array)
- `selected_services` (hidden, comma-separated string)

## Troubleshooting

### Form Not Detected?
1. Ensure `netlify.toml` is in your project root
2. Verify the form has `netlify` and `data-netlify="true"` attributes
3. Check that field names match between Vue form and static form
4. Rebuild and redeploy

### Form Submissions Not Working?
1. Check Netlify Forms dashboard for submissions
2. Verify reCAPTCHA is configured if used
3. Ensure the form method is `POST`
4. Check browser console for JavaScript errors

## Netlify Forms Features

Once working, you'll have access to:
- Form submissions dashboard
- Spam protection
- Email notifications
- Webhook integrations
- reCAPTCHA integration

## Contact

For support with Netlify forms, visit [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)