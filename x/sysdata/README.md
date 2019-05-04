# deno-sysdata

(Experimental) deno library for gathering info about your system



## Data we export

We want to support the kinds of things that Chef's [Ohai tool](https://docs.chef.io/ohai.html) provides.

- [ ] /etc/passwd parse
- [ ] /etc/group parse
- [ ] determine operating system (platform, platform family, version)
- [ ] kernel version
- [ ] network interfaces (tons of info here)
- [ ] uptime in seconds and human readable format
- [ ] init package discovery (systemd vs upstart vs whatever)
- [ ] hostname
- [ ] cloud provider metadata (this is a lot of stuff)
- [ ] filesystem discovery (devices, tempfs, network mounts)
- [ ] memory information (swap, total, free, buffers, other weird stuff)
- [ ] virtualization info
- [ ] CPU information (vendor, family, mhz, cores, flags)
- [ ] Arp table
- [ ] routes


## Testing

If you are on MacOS, only Virtualbox 6 can install Guest Additions and allow
host file shares.
