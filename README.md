# basic-preference-centre

This solution provides the barebones for a basic SFMC preference centre implementation with features aimed at rapid deployment, consistency and ease of maintainence.

To use it: 

1. Create a new cloudpage collection to house your preference centre.<br />
2. Within the collection, create each of the following as code resource pages:<br />
    * styles.css (CSS)<br />
    * main.js (javascript)<br />
3. Within the collection, create a separate cloudpage for each of the following:<br />
    * index.html<br />
    * error.html<br />
    * thankyou.html<br />
    * unsubscribed.html<br />
    * preference_processing.amp<br />
    * one_click_processing.amp<br />
    * one_click_unsubscribe.html<br />
4. Deploy `DEs and additional assets-v1.json` via Package Manager. This package contains: 
    * Master DE (for preferences)<br />
    * Preference_Centre_Assets DE (Reference DE for assets used in cloudpages)<br />
    * Preference_Centre_Creds DE (Reference DE for values used in encryption)<br />
    * CSP Settings (Code Snippet used in cloudpages)<br />
    * OSF Logo (Image used in cloudpages)<br />
5. Populate the `Preference_Centre_Assets` DE with your own cloudpage/content/data extension IDs to relink assets. See `Sample_Preference_Centre_Assets.csv` for example. Make sure NOT to change the values in the Asset column.
6. Populate the `Preference_Centre_Creds` DE with your own values. See `Sample_Preference_Centre_Creds.csv` for example.
7. Populate the `Master DE` with your own subscriber records.
8. To test, create a test email using `Sample_Email.html` as a base. Make sure to replace the URL in `@preflink` variable (line 522) with your own preference centre URL.
