/*sign out*/
var signOut = document.querySelector('.signOut')
var navListItemSignOut = document.querySelector('.nav-list__item__signOut')
var signOutNo = document.querySelector('.signOut__No')
var coating = document.querySelector('.coating')
navListItemSignOut.onclick = () => {
    coating.style.display="block";
    signOut.style.display= 'block';

}
signOutNo.onclick = () => {
    coating.style.display="none";
    signOut.style.display= 'none';
}

/*music */
var relaxPlaylistAll = document.querySelectorAll('.relaxPlaylistAll')

var relaxPlaylist1 = document.querySelector('.relaxPlaylist1')

var relaxPlaylist2 = document.querySelector('.relaxPlaylist2')

var relaxPlaylist3 = document.querySelector('.relaxPlaylist3')

var relaxPlaylist4 = document.querySelector('.relaxPlaylist4')

var relaxPlaylist5 = document.querySelector('.relaxPlaylist5')

 var hideVideo = document.querySelector('.hideVideo')

relaxPlaylistAll[0].onclick = () => {
    relaxPlaylist1.style.display = 'block';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[1].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'block';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[2].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'block';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[3].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'block';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[4].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'block';
}

hideVideo.onclick = ( )=>{
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}


// setting list 
  var settingList = document.querySelector('.settingList')
  var navSetting = document.querySelector('.nav-list__item__setting')
var settingClose = document.querySelector('.settingList-close')
  navSetting.onclick = () => {
     settingList.style.display ="block"
     coating.style.display="block"; // khai bao o dong thu 5
  }
 settingClose.onclick = () => {
    settingList.style.display ="none"
    coating.style.display="none";  // lhai bao o dong thu 5
 }


 /*profile */

 var profileClose = document.querySelector('.profile-close')

 var profile =document.querySelector('.profile')

 var navProfile = document.querySelector('.nav-list__item__profile')

 profileClose.onclick = () => {
    profile.style.display='none'
    coating.style.display="none";  // lhai bao o dong thu 5
 }
 navProfile.onclick = () => {
    profile.style.display = 'block'
    coating.style.display="block"; // khai bao o dong thu 5
 }


 /* feature setting */

 var featureSetting = document.querySelector('.featureSetting')

 var itemSetting = document.querySelector('.settingList-item__setting')

 itemSetting.onmouseover= () => {
    // console.log(2)
    featureSetting.style.display = "block"
 }

 itemSetting.onmouseout = () => {
    featureSetting.style.display = "none"
 }
 // dung de cho cai featuresetting kh bi tat khi cho chuot ra khoi the itemsetting
 featureSetting.onmouseover = () => { 
    featureSetting.style.display = "block"
 }

 // dung de cho cai featuresetting tat khi cho chuot ra khoi the featuresetting
 featureSetting.onmouseout = () => { 
    featureSetting.style.display = "none"
 }

  // feature seetting rename
  var settingRename = document.querySelector('.featureSetting__text__rename')

  var featureSettingRename = document.querySelector('.featureSetting-rename')

  var featureSettingRenameClose = document.querySelector('.featureSetting-rename__close')  
  var featureSettingRenameCoating = document.querySelector('.featureSetting-rename__coating')
  settingRename.onclick = () => {
    featureSettingRename.style.visibility= "visible"; 
    featureSettingRenameCoating.style.display='block';  
}
  featureSettingRenameClose.onclick = () => {
     
    featureSettingRenameCoating.style.display='none';
    featureSettingRename.style.visibility= "hidden"; 
  }
  
  

  //--------------------------------

   // feature seetting changePassword
   var settingChangePassword = document.querySelector('.featingSetting__text__changePassword')

   var featureSettingChangePassword = document.querySelector('.featureSetting-changePassword ')
 
   var featureSettingChangePasswordClose = document.querySelector('.featureSetting-changePassword__close')  
   var featureSettingChangePasswordCoating = document.querySelector('.featureSetting-changePassword__coating')
   settingChangePassword.onclick = () => {
     featureSettingChangePassword.style.visibility= "visible"; 
     featureSettingChangePasswordCoating.style.display='block';  
 }
   featureSettingChangePasswordClose.onclick = () => {
      
     featureSettingChangePasswordCoating.style.display='none';
     featureSettingChangePassword.style.visibility= "hidden"; 
   }
   
   
 
   //--------------------------------
 
/* feature report*/
 var featureReportGuide = document.querySelector('.feature-report__guide')

  var settingListItemReport = document.querySelector('.settingList-item__report')

  var featureReport = document.querySelector('.feature-report')
  
  var featureReportClose = document.querySelector('.feature-report__close')

  var featureSettingReportCoating = document.querySelector('.featureSetting-report__coating')

  settingListItemReport.onmouseover = () => {
    featureReportGuide.style.display = "block"
  }
  settingListItemReport.onmouseout = () => {
    featureReportGuide.style.display = "none"
  }

  featureReportGuide.onmouseover = () => {
    featureReportGuide.style.display = "block"
  }
  featureReportGuide.onmouseout = () => {
    featureReportGuide.style.display = "none"
  }

  settingListItemReport.onclick = () => {
    featureSettingReportCoating.style.display = 'block';
    featureReport.style.visibility ='visible'
  }
  featureReportClose.onclick = () => {
    featureReport.style.visibility ='hidden'
    featureSettingReportCoating.style.display = 'none';
  }

  /*setting feedback */
  var settingListItemFeedback = document.querySelector('.settingList-item__feedback')
 
  var featureFeedback = document.querySelector('.feature-feedback')
  
  settingListItemFeedback.onmouseover = () => {
   featureFeedback.style.display = "block"
  }
  settingListItemFeedback.onmouseout = () => {
   featureFeedback.style.display = "none"
  }

 featureFeedback.onmouseover = () => {
   featureFeedback.style.display = "block"
  }
 featureFeedback.onmouseout = () => {
   featureFeedback.style.display = "none"
  }

    /*setting change password*/
    var settingListItemchangaeAccount = document.querySelector('.settingList-item__changeAccount')
   
    var featurechangaeAccountGuide = document.querySelector('.feature-changeAccount__guide')

    var boxSI = document.querySelector('.boxSI')

    var boxSIClose = document.querySelector('.boxSI__close')

    var boxSI__coating = document.querySelector('.boxSI__coating')

    settingListItemchangaeAccount.onmouseover = () => {
     featurechangaeAccountGuide.style.display = "block"
    }
    settingListItemchangaeAccount.onmouseout = () => {
     featurechangaeAccountGuide.style.display = "none"
    }
  
   featurechangaeAccountGuide.onmouseover = () => {
     featurechangaeAccountGuide.style.display = "block"
    }
   featurechangaeAccountGuide.onmouseout = () => {
     featurechangaeAccountGuide.style.display = "none"
    }
    settingListItemchangaeAccount.onclick = () => {
        boxSI__coating.style.display = "block"
        boxSI.style.display="block"
    }
    boxSIClose.onclick = () => {
        boxSI__coating.style.display = "none"
        boxSI.style.display = "none"
    }
  
   
