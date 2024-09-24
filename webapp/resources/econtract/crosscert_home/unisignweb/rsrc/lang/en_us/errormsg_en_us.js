(function() {
    return {
        IDS_CERT_LOADING_MSG: ["loading certificate list ...", "signing ...", "revoking certificate ...", "deleting certificate ...", "renewing certificate ...", "copying certificate ...", 
    	                                  "importing certificate ...", "exporting certificate ...", "changing password ...", "checking password ...", "generating envelop data ...", 
    	                                  "verifying envelop data ...", "validating certificate ...", "verifying license ...", "getting media info ...", "issuing certificate ...", 
    	                                  "verifying sign data ...", "backuping certificate ...", "recovering backuped certificate ...", "generating hash data ...", "encrypting symmkey data ..."],
        IDS_ERROR_USER_CANCEL:            "User canceled",
        IDS_ERROR_NOT_SUPPORT_ALGORITHM:  "It's not supported",
        IDS_ERROR_FILE_NOT_FOUND:		  "Failed to load file",
        IDS_ERROR_DO_NOT_AVAILABLE:       "Failt to get Verify Info of Javascript File. \nIssue Certificate/ReIssue Certficate/Renew Certificate are not processed\nPlease call 1566-0566(customer center of CrossCert)",
        IDS_ERROR_NIM_NOT_INSTALL:		  "UniCRSLocalServer Program is not installed.\nMove to install page.",
        IDS_ERROR_NIM_NOT_INSTALL_CFM:		  "UniCRSLocalServer Program is not installed.\nDo you want to move to install page?", 
        IDS_ERROR_NIM_NOT_LASTEST_VERSION:		  "UniCRSLocalServer Program need to update\nMove to install page.",
        IDS_ERROR_NIM_NOT_LASTEST_VERSION_CFM:		  "UniCRSLocalServer Program need to update\nDo you want to move to install page?",
        IDS_ERROR_BROWSER_NOT_SUPPORT:    "It's not supported on this browser.",
        IDS_MSGBOX_NIM_ERROR_UNLOAD:     "UniCRSLocalServer is unloaded.\nPlease refresh page or go to first page and retry.",
        
        IDS_VERIFYKEY_SIGN:				  "[cert for sign   ] ",
        IDS_VERIFYKEY_KM:				  "[cert for encrypt] ",
        
        IDS_VERIFYKEY_OK:				  "success",
        IDS_VERIFYKEY_FAIL:				  "fail",
        IDS_VERIFYKEY_NONE:				  "none",
        
        IDS_VERIFY_SIGN:				  "Failed to verify sign data.",
        IDS_VID_VERIFY_MESSAGE:			  "Verifing Identification. Please wait ...",
        // yjyoon 2016.06.01, 키보드 보안 모듈 설치를 확인하고 있습니다
        IDS_KS_INSTALL_CHECK:			  "Checking Keyboard Security program ...", 
        
        // nhkim 20151130
        IDS_NOALLOW_UPDATECERT: 		  "Renew certificate is not allowed. After registering renew certificate option and retry.",
        IDS_NOALLOW_SOE: 		 		  "Certificate revocation cannot proceed. Please try to suspend the issuer.",
        IDS_NOALLOW_REVOCATION: 		  "Certificate revocation cannot proceed. Please try repeal from the issuer.",
        
        IDS_MSGBOX_VID_ERROR_VERIFICATION: 	"Failed to verify Identificateion. \nSSN or Business No is not same in Certificate's.",
        
        IDS_MSGBOX_VERIFY_LICENSE: 		  	"Failed to verify License. Please check License.",
        
        IDS_MSGBOX_LOCALSERVER_UNLOAD: 		"UniCRSLocalServer is unloaded \nCurrent process will stop. \nPlease refresh page or go to first page and retry.",
        IDS_ERROR_NOT_SUPPORT_DEVICE:  		"It's not supported media.",
        
        IDS_ERROR_NOT_MATTCHED_PWD:  		"Password is not correct.",
        IDS_NO_KMCERT:						"Cert for encrypting is not exist.",
        
        IDS_ERROR_FUC_NOT_SUPPORT:  		"It's not supported in current mode.",  
        
        IDS_CANT_ISSUECERT_BIOTOKEN:		"Certificate can't issue, renew and reIssue at Bio-Token.",
		IDS_ERROR_EMPTY_PARAMS:				"Invalid argument",
        IDS_ERROR_VERIFY_ID:				"Identity verification failed.",
   		IDS_VERIFY_CERT_ERROR_EXPIRED:						"The validity period of the certificate has expired or is not yet valid.",
		IDS_VERIFY_CERT_ERROR_CHECKING_ISSUER_FAIL: 		"Failed to verify issuer information of certificate.",
		IDS_VERIFY_CERT_OK: 								"This is a valid certificate.",
		IDS_ERROR_RENEW_WHALE:			"Certificate renewal is not permitted. Please check with the relevant registrar and try renewal.",
		IDS_MSGBOX_COMMON_ERROR_GET_CERT:					"Failed to acquire the certificate.",
		IDS_CANCEL_BACKUP:				"Certificate backup has been cancelled.\n Certificate issuance to the selected storage medium has been completed.",
		
		IDS_CLOUD_UPLOAD : "Saving the selected certificate to the cloud",
		IDS_CLOUD_DELETE : "Deleting selected cloud certificate",
		IDS_CLOUD_CHANGE_PIN : "Changing PIN for selected cloud certificate",
		IDS_CLOUD_DISCONNECT : "Closing connection to cloud service",
		IDS_CLOUD_EXPORT :	"Exporting selected cloud certificate",
		IDS_CLOUD_UNLOCK : "Unlocking selected cloud certificate",
		IDS_CLOUD_DELETE_ACCOUNT : "Deleting cloud service account",
		IDS_CLOUD_GET_CLOUD_INFO : "Cloud service information is being viewed.",
		IDS_CLOUD_DELETE_AUTO_CON : "Disconnecting cloud service",
		IDS_CLOUD_ERROR : { '-1' : 'Do not Service',
							'20000' : 'Invalid Data',
							'20003' : 'No Data',
							'20004' : 'Does not fit data type',
							'20010' : 'name value mismatch',
							'20100' : 'Failed to generate key pair',
							'20103' : 'Failed to encoding secret key',
							'20105' : 'Failed to encoding public key',
							'20106' : 'Failed to decoding public key',
							'20107' : 'Failed to signautre',
							'20108' : 'Failed to encrypt PIN',
							'20109' : 'Failed to decrypt PIN',
							'20110' : 'Failed to extract pin number',
							'20111' : 'Failed to change pin number',
							'20200' : 'Failed to SSL Connection',
							'20350' : 'Failed to generate X.509 certificate data',
							'20351' : 'Failed to get X.509 certificate information.',
							'20604' : 'PIN rule Error: repeat the same character',
							'20605' : 'PIN rule Error: 3 or more consecutive characters',
							'20703' : 'Do not agree to the terms of use.',
							'20800' : 'Do not match API key',
							'20900' : 'Storage initialization related operation failed',
							'20901' : 'Failed to save user info',
							'20902' : 'Failed to extract user info',
							'20903' : 'Failed to update user info',
							'20904' : 'Failed to delete user info',
							'20905' : 'Failed to save certificate info',
							'20906' : 'Failed to extract certificate info',
							'20907' : 'Failed to update certificate info',
							'20908' : 'Failed to delete certificate info',
							'20909' : 'Failed to delete all storage',
							'20910' : 'Failed to save last MO authentication time',
							'20911' : 'Failed to extract last MO authentication time',
							'20920' : 'User info input page error(check detail field)',
							'20921' : 'MO authentication page error (check detail field)',
							'20922' : 'Member sign-up terms page error',
							'20930' : 'User info input page cancel event error',
							'20933' : 'MO authentication page cancel event error',
							'20936' : 'Member sign-up terms page cancel event error',
							'20940' : 'Failed to export key pair',
							'20950' : 'Avoid repeated use of MO authentication'
							}
	}
})();