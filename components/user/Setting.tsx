"use client"
import { useTranslation } from "@/i18n/client";
import { cookieName, languages } from "@/i18n/settings";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from "@mui/material";
import { setCookie } from "cookies-next/client";
import { useState } from "react";
import ThemeSwitcherButton from "@/components/home/ThemeswitcherButton";
import { Trans } from "react-i18next";
import Link from "next/link";
const translationLink = 'https://translatewiki.net/wiki/Special:Translate?group=wikimedia-tools-campwiz-frontend&action=translate&filter=!translated&utm_source=CampWizFrontend&utm_campaign=CampWizFrontend&utm_medium=translatewiki&utm_content=CampWizFrontend&utm_term=CampWizFrontend';
const SettingsPage = ({ onClose }: { onClose: () => void }) => {
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [refreshNeeded, setRefreshNeeded] = useState(false);
    const handleClose = () => {
        onClose();
        if (refreshNeeded) {
            window.location.reload();
        }
    }
    return (
        <Dialog open onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{t('settings.title')}</DialogTitle>
            <DialogContent>
                <TextField
                    select
                    label={t('settings.language')}
                    fullWidth
                    variant="outlined"
                    sx={{ my: 1 }}
                    value={selectedLanguage} // Set the default value to the first language
                    onChange={(e) => {
                        const selectedLanguage = e.target.value;
                        i18n.changeLanguage(selectedLanguage, () => {
                            setCookie(cookieName, selectedLanguage, { path: '/' });
                        })
                        setSelectedLanguage(selectedLanguage);
                        setRefreshNeeded(true);
                    }}
                    helperText={<Trans
                        i18nKey={'settings.helpTranslation'}
                        t={t}
                        components={[<Link
                            key="1"
                            href={translationLink}
                            style={{ textDecoration: 'none', color: 'blue' }}
                            className="translation-link"
                            target="_blank"
                            rel="noopener noreferrer">{translationLink}</Link>]}
                    />
                    }
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            {t(`languages.${lang}`)}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Typography variant="body1">
                        {t('settings.theme')}
                    </Typography>
                    <ThemeSwitcherButton />

                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="outlined">
                    {t('close')}
                </Button>
            </DialogActions>
        </Dialog>
    );

}
export default SettingsPage;