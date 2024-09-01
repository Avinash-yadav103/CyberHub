import React, { useState, useEffect } from 'react';
import './ArticlePage.css';

const cveData = [
    {
      cveID: "CVE-2021-1879",
      vendorProject: "Apple",
      product: "iOS, iPadOS, and watchOS",
      vulnerabilityName: "Apple iOS, iPadOS, and watchOS WebKit Cross-Site Scripting (XSS) Vulnerability",
      dateAdded: "2021-11-03",
      shortDescription: "Apple iOS, iPadOS, and watchOS WebKit contain an unspecified vulnerability that allows for universal cross-site scripting (XSS) when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.",
      requiredAction: "Apply updates per vendor instructions.",
      dueDate: "2021-11-17",
      knownRansomwareCampaignUse: "Unknown",
      notes: "",
      cwes: []
    },
    {
      cveID: "CVE-2021-30661",
      vendorProject: "Apple",
      product: "Multiple Products",
      vulnerabilityName: "Apple Multiple Products WebKit Storage Use-After-Free Vulnerability",
      dateAdded: "2021-11-03",
      shortDescription: "Apple iOS, iPadOS, macOS, tvOS, watchOS, and Safari WebKit Storage contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.",
      requiredAction: "Apply updates per vendor instructions.",
      dueDate: "2021-11-17",
      knownRansomwareCampaignUse: "Unknown",
      notes: "",
      cwes: []
    },
    {
        "cveID": "CVE-2020-3569",
        "vendorProject": "Cisco",
        "product": "IOS XR",
        "vulnerabilityName": "Cisco IOS XR Software DVMRP Memory Exhaustion Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Cisco IOS XR Distance Vector Multicast Routing Protocol (DVMRP) incorrectly handles Internet Group Management Protocol (IGMP) packets. Exploitation could allow an unauthenticated, remote attacker to immediately crash the IGMP process or make it consume available memory and eventually crash.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-3161",
        "vendorProject": "Cisco",
        "product": "Cisco IP Phones",
        "vulnerabilityName": "Cisco IP Phones Web Server Remote Code Execution and Denial-of-Service Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Cisco IP Phones contain an improper input validation vulnerability for HTTP requests. Exploitation could allow an attacker to execute code remotely with\ufffdroot\ufffdprivileges or cause a denial-of-service (DoS) condition.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-1653",
        "vendorProject": "Cisco",
        "product": "Small Business RV320 and RV325 Routers",
        "vulnerabilityName": "Cisco Small Business RV320 and RV325 Routers Information Disclosure Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Cisco Small Business RV320 and RV325 Dual Gigabit WAN VPN Routers contain improper access controls for URLs. Exploitation could allow an attacker to download the router configuration or detailed diagnostic information.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-0296",
        "vendorProject": "Cisco",
        "product": "Adaptive Security Appliance (ASA)",
        "vulnerabilityName": "Cisco Adaptive Security Appliance (ASA) Denial-of-Service Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Cisco Adaptive Security Appliance (ASA) contains an improper input validation vulnerability with HTTP URLs. Exploitation could allow an attacker to cause a denial-of-service (DoS) condition or information disclosure.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-13608",
        "vendorProject": "Citrix",
        "product": "StoreFront Server",
        "vulnerabilityName": "Citrix StoreFront Server XML External Entity (XXE) Processing Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix StoreFront Server contains an XML External Entity (XXE) processing vulnerability that may allow an unauthenticated attacker to retrieve potentially sensitive information.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8193",
        "vendorProject": "Citrix",
        "product": "Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance",
        "vulnerabilityName": "Citrix ADC, Gateway, and SD-WAN WANOP Appliance Authorization Bypass Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an authorization bypass vulnerability that may allow unauthenticated access to certain URL endpoints. The attacker must have access to the NetScaler IP (NSIP) in order to perform exploitation.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8195",
        "vendorProject": "Citrix",
        "product": "Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance",
        "vulnerabilityName": "Citrix ADC, Gateway, and SD-WAN WANOP Appliance Information Disclosure Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an information disclosure vulnerability.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8196",
        "vendorProject": "Citrix",
        "product": "Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance",
        "vulnerabilityName": "Citrix ADC, Gateway, and SD-WAN WANOP Appliance Information Disclosure Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an information disclosure vulnerability.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-19781",
        "vendorProject": "Citrix",
        "product": "Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance",
        "vulnerabilityName": "Citrix ADC, Gateway, and SD-WAN WANOP Appliance Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an unspecified vulnerability that could allow an unauthenticated attacker to perform code execution.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-11634",
        "vendorProject": "Citrix",
        "product": "Workspace Application and Receiver for Windows",
        "vulnerabilityName": "Citrix Workspace Application and Receiver for Windows Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Citrix Workspace Application and Receiver for Windows contains remote code execution vulnerability resulting from local drive access preferences not being enforced into the clients' local drives.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-29557",
        "vendorProject": "D-Link",
        "product": "DIR-825 R1 Devices",
        "vulnerabilityName": "D-Link DIR-825 R1 Devices Buffer Overflow Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "D-Link DIR-825 R1 devices contain a buffer overflow vulnerability in the web interface that may allow for remote code execution.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-25506",
        "vendorProject": "D-Link",
        "product": "DNS-320 Device",
        "vulnerabilityName": "D-Link DNS-320 Device Command Injection Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "D-Link DNS-320 device contains a command injection vulnerability in the sytem_mgr.cgi component that may allow for remote code execution.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-15811",
        "vendorProject": "DotNetNuke (DNN)",
        "product": "DotNetNuke (DNN)",
        "vulnerabilityName": "DotNetNuke (DNN) Inadequate Encryption Strength Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "DotNetNuke (DNN) contains an inadequate encryption strength vulnerability resulting from the use of a weak encryption algorithm to protect input parameters.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-18325",
        "vendorProject": "DotNetNuke (DNN)",
        "product": "DotNetNuke (DNN)",
        "vulnerabilityName": "DotNetNuke (DNN) Inadequate Encryption Strength Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "DotNetNuke (DNN) contains an inadequate encryption strength vulnerability resulting from the use of a weak encryption algorithm to protect input parameters. This CVE ID resolves an incomplete patch for CVE-2018-15811.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2017-9822",
        "vendorProject": "DotNetNuke (DNN)",
        "product": "DotNetNuke (DNN)",
        "vulnerabilityName": "DotNetNuke (DNN) Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "DotNetNuke (DNN) contains a vulnerability that may allow for remote code execution via cookie deserialization.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-15752",
        "vendorProject": "Docker",
        "product": "Desktop Community Edition",
        "vulnerabilityName": "Docker Desktop Community Edition Privilege Escalation Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Docker Desktop Community Edition contains a vulnerability that may allow local users to escalate privileges by placing a trojan horse docker-credential-wincred.exe file in %PROGRAMDATA%\\DockerDesktop\\version-bin\\.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8515",
        "vendorProject": "DrayTek",
        "product": "Multiple Vigor Routers",
        "vulnerabilityName": "Multiple DrayTek Vigor Routers Web Management Page Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "DrayTek Vigor3900, Vigor2960, and Vigor300B routers contain an unspecified vulnerability that allows for remote code execution.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-7600",
        "vendorProject": "Drupal",
        "product": "Drupal Core",
        "vulnerabilityName": "Drupal Core Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Drupal Core contains a remote code execution vulnerability that could allow an attacker to exploit multiple attack vectors on a Drupal site, resulting in complete site compromise.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2021-22205",
        "vendorProject": "GitLab",
        "product": "Community and Enterprise Editions",
        "vulnerabilityName": "GitLab Community and Enterprise Editions Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "GitHub Community and Enterprise Editions that utilize the ability to upload images through GitLab Workhorse are vulnerable to remote code execution. Workhorse passes image file extensions through ExifTool, which improperly validates the image files.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-6789",
        "vendorProject": "Exim",
        "product": "Exim",
        "vulnerabilityName": "Exim Buffer Overflow Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Exim contains a buffer overflow vulnerability in the base64d function part of the SMTP listener that may allow for remote code execution.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8657",
        "vendorProject": "EyesOfNetwork",
        "product": "EyesOfNetwork",
        "vulnerabilityName": "EyesOfNetwork Use of Hard-Coded Credentials Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "EyesOfNetwork contains a use of hard-coded credentials vulnerability, as it uses the same API key by default. Exploitation allows an attacker to calculate or guess the admin access token.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-8655",
        "vendorProject": "EyesOfNetwork",
        "product": "EyesOfNetwork",
        "vulnerabilityName": "EyesOfNetwork Improper Privilege Management Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "EyesOfNetwork contains an improper privilege management vulnerability that may allow a user to run commands as root via a crafted Nmap Scripting Engine (NSE) script to nmap7.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-5902",
        "vendorProject": "F5",
        "product": "BIG-IP",
        "vulnerabilityName": "F5 BIG-IP Traffic Management User Interface (TMUI) Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "F5 BIG-IP Traffic Management User Interface (TMUI) contains a remote code execution vulnerability in undisclosed pages.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2021-22986",
        "vendorProject": "F5",
        "product": "BIG-IP and BIG-IQ Centralized Management",
        "vulnerabilityName": "F5 BIG-IP and BIG-IQ Centralized Management iControl REST Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "F5 BIG-IP and BIG-IQ Centralized Management contain a remote code execution vulnerability in the iControl REST interface that allows unauthenticated attackers with network access to execute system commands, create or delete files, and disable services.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2021-35464",
        "vendorProject": "ForgeRock",
        "product": "Access Management (AM)",
        "vulnerabilityName": "ForgeRock Access Management (AM) Core Server Remote Code Execution Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "ForgeRock Access Management (AM) Core Server allows an attacker who sends a specially crafted HTTP request to one of three endpoints (\/ccversion\/Version, \/ccversion\/Masthead, or \/ccversion\/ButtonFrame) to execute code in the context of the current user (unless ForgeRock AM is running as root user, which the vendor does not recommend).",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2019-5591",
        "vendorProject": "Fortinet",
        "product": "FortiOS",
        "vulnerabilityName": "Fortinet FortiOS Default Configuration Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Fortinet FortiOS contains a default configuration vulnerability that may allow an unauthenticated attacker on the same subnet to intercept sensitive information by impersonating the Lightweight Directory Access Protocol (LDAP) server.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-12812",
        "vendorProject": "Fortinet",
        "product": "FortiOS",
        "vulnerabilityName": "Fortinet FortiOS SSL VPN Improper Authentication Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Fortinet FortiOS SSL VPN contains an improper authentication vulnerability that may allow a user to login successfully without being prompted for the second factor of authentication (FortiToken) if they change the case in their username.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2018-13379",
        "vendorProject": "Fortinet",
        "product": "FortiOS",
        "vulnerabilityName": "Fortinet FortiOS SSL VPN Path Traversal Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Fortinet FortiOS SSL VPN web portal contains a path traversal vulnerability that may allow an unauthenticated attacker to download FortiOS system files through specially crafted HTTP resource requests.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Known",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-16010",
        "vendorProject": "Google",
        "product": "Chrome for Android UI",
        "vulnerabilityName": "Google Chrome for Android UI Heap Buffer Overflow Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chrome for Android UI contains a heap buffer overflow vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-15999",
        "vendorProject": "Google",
        "product": "Chrome FreeType",
        "vulnerabilityName": "Google Chrome FreeType Heap Buffer Overflow Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chrome uses FreeType, an open-source software library to render fonts, which contains a heap buffer overflow vulnerability in the function Load_SBit_Png when processing PNG images embedded into fonts. This vulnerability is part of an exploit chain with CVE-2020-17087 on Windows and CVE-2020-16010 on Android.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2021-21166",
        "vendorProject": "Google",
        "product": "Chromium",
        "vulnerabilityName": "Google Chromium Race Condition Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chromium contains a race condition vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-16017",
        "vendorProject": "Google",
        "product": "Chrome",
        "vulnerabilityName": "Google Chrome Use-After-Free Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chrome contains a use-after-free vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page.  ",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2021-37976",
        "vendorProject": "Google",
        "product": "Chromium",
        "vulnerabilityName": "Google Chromium Information Disclosure Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chromium contains an information disclosure vulnerability within the core memory component that allows a remote attacker to obtain potentially sensitive information from process memory via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2021-11-17",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    {
        "cveID": "CVE-2020-16009",
        "vendorProject": "Google",
        "product": "Chromium V8",
        "vulnerabilityName": "Google Chromium V8 Type Confusion Vulnerability",
        "dateAdded": "2021-11-03",
        "shortDescription": "Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.",
        "requiredAction": "Apply updates per vendor instructions.",
        "dueDate": "2022-05-03",
        "knownRansomwareCampaignUse": "Unknown",
        "notes": "",
        "cwes": []
    },
    // Add more CVE objects as needed
  ];

  const CVEItem = ({ cve }) => {
    return (
      <div className="cve-item">
        <h2>{cve.cveID} - {cve.vulnerabilityName}</h2>
        <p><strong>Vendor/Project:</strong> {cve.vendorProject}</p>
        <p><strong>Product:</strong> {cve.product}</p>
        <p><strong>Date Added:</strong> {cve.dateAdded}</p>
        <p><strong>Description:</strong> {cve.shortDescription}</p>
        <p><strong>Required Action:</strong> {cve.requiredAction}</p>
        <p><strong>Due Date:</strong> {cve.dueDate}</p>
        <p><strong>Known Ransomware Campaign Use:</strong> {cve.knownRansomwareCampaignUse}</p>
        {cve.notes && <p><strong>Notes:</strong> {cve.notes}</p>}
      </div>
    );
  };
  
  // CVE List Component
  const ArticlePage = () => {
    return (
      <div className="cve-list">
        {cveData.map((cve, index) => (
          <CVEItem key={index} cve={cve} />
        ))}
      </div>
    );
  };
  
  export default ArticlePage;